// General imports
const fs = require('fs');
const path = require('path');

// Import testing script
const { run } = require('../../helpers/StoriesCompare');

// Node helpers import
const { getFilesRecursively, removeFolder } = require('../../helpers/NodeHelpers');

// Path to the temporary test folder structure.
const testRoot = path.join(__dirname, 'test_structure');

// Directory names
const APPROVED_DIR_NAME = '.stories-approved';
const PENDING_DIR_NAME = '.stories-pending';

const APPROVED_STORIES = path.join(testRoot, APPROVED_DIR_NAME);
const PENDING_STORIES = path.join(testRoot, PENDING_DIR_NAME);

/**
 * Creates the directory with the given name and populates it with given files.
 *
 * @param {string} dirName Name of the directory to create
 * @param {object[]} filesToWrite Array of the file objects to write
 */
const createAndPopulateDirectory = (dirName, filesToWrite) => {
  const dirPath = path.join(testRoot, dirName);
  fs.mkdirSync(dirPath);

  filesToWrite.forEach((file) => fs.writeFileSync(path.join(dirPath, file.name), file.content));
};

/**
 * Storycap Compare helper unit tests.
 */
describe('Storycap compare unit tests', () => {
  /**
   * Runs before each individual test.
   */
  beforeEach(() => {
    fs.mkdirSync(testRoot);
  });

  /**
   * Runs after each individual test.
   */
  afterEach(() => {
    removeFolder(testRoot);
  });

  /**
   * Newly captured stories are the same as already approved ones.
   * Testing that the helper does nothing if approved and pending files are the same.
   */
  it('Should do nothing if approved and pending files are the same', () => {
    // Arrange
    const files = [
      { name: 'Test1', content: 'Test1Content' },
      { name: 'Test2', content: 'Test2Content' }
    ];
    createAndPopulateDirectory(APPROVED_DIR_NAME, files);
    createAndPopulateDirectory(PENDING_DIR_NAME, files);

    const shouldBeApproved = [...files];
    const shouldBePending = [...files];

    const exitMock = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    run(APPROVED_STORIES, PENDING_STORIES, APPROVED_DIR_NAME, PENDING_DIR_NAME);

    const approvedFiles = getFilesRecursively(APPROVED_STORIES);
    const pendingFiles = getFilesRecursively(PENDING_STORIES);

    // Assert
    expect(approvedFiles).toHaveLength(shouldBeApproved.length);
    approvedFiles.forEach((file, index) => {
      expect(file).toContain(shouldBeApproved[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBeApproved[index].content);
    });

    expect(pendingFiles).toHaveLength(shouldBePending.length);
    pendingFiles.forEach((file, index) => {
      expect(file).toContain(shouldBePending[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBePending[index].content);
    });

    expect(exitMock).not.toHaveBeenCalled();
    exitMock.mockRestore();
  });

  /**
   * There are fewer newly captured stories.
   * Testing that the helper deletes the extra approved files if they do not exist among
   * the pending files.
   */
  it('Should delete extra approved files', () => {
    // Arrange
    const pending = [
      { name: 'Test1', content: 'Test1Content' }
    ];
    createAndPopulateDirectory(PENDING_DIR_NAME, pending);

    const approved = [
      ...pending,
      { name: 'Test2', content: 'Test2Content' }
    ];
    createAndPopulateDirectory(APPROVED_DIR_NAME, approved);

    const shouldBePending = [...pending];
    const shouldBeApproved = [...pending];

    const exitMock = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    run(APPROVED_STORIES, PENDING_STORIES, APPROVED_DIR_NAME, PENDING_DIR_NAME);

    const approvedFiles = getFilesRecursively(APPROVED_STORIES);
    const pendingFiles = getFilesRecursively(PENDING_STORIES);

    // Assert
    expect(approvedFiles).toHaveLength(shouldBeApproved.length);
    approvedFiles.forEach((file, index) => {
      expect(file).toContain(shouldBeApproved[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBeApproved[index].content);
    });

    expect(pendingFiles).toHaveLength(shouldBePending.length);
    pendingFiles.forEach((file, index) => {
      expect(file).toContain(shouldBePending[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBePending[index].content);
    });

    expect(exitMock).toHaveBeenCalled();
    exitMock.mockRestore();
  });

  /**
   * There are more newly captured stories than approved stories.
   * Testing that the helper approves the extra pending files if they do not exist among
   * the approved files.
   */
  it('Should approve extra pending files', () => {
    // Arrange
    const approved = [
      { name: 'Test1', content: 'Test1Content' }
    ];
    createAndPopulateDirectory(APPROVED_DIR_NAME, approved);

    const pending = [
      ...approved,
      { name: 'Test2', content: 'Test2Content' }
    ];
    createAndPopulateDirectory(PENDING_DIR_NAME, pending);

    const shouldBeApproved = [...pending];
    const shouldBePending = [...approved];

    const exitMock = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    run(APPROVED_STORIES, PENDING_STORIES, APPROVED_DIR_NAME, PENDING_DIR_NAME);

    const approvedFiles = getFilesRecursively(APPROVED_STORIES);
    const pendingFiles = getFilesRecursively(PENDING_STORIES);

    // Assert
    expect(approvedFiles).toHaveLength(shouldBeApproved.length);
    approvedFiles.forEach((file, index) => {
      expect(file).toContain(shouldBeApproved[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBeApproved[index].content);
    });

    expect(pendingFiles).toHaveLength(shouldBePending.length);
    pendingFiles.forEach((file, index) => {
      expect(file).toContain(shouldBePending[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBePending[index].content);
    });

    expect(exitMock).toHaveBeenCalled();
    exitMock.mockRestore();
  });

  /**
   * Not all newly captured stories are the same as already approved ones.
   * Testing that the helper overwrites the approved files with their pending counterparts
   * if they are not the same.
   */
  it('Should overwrite different content', () => {
    // Arrange
    const approved = [
      { name: 'Test1', content: 'Test1Content' },
      { name: 'Test2', content: 'Test2Content' }
    ];
    createAndPopulateDirectory(APPROVED_DIR_NAME, approved);

    const pending = [
      { name: 'Test1', content: 'Test1Content' },
      { name: 'Test2', content: 'Test2UpdatedContent'}
    ];
    createAndPopulateDirectory(PENDING_DIR_NAME, pending);

    const shouldBeApproved = [
      { name: 'Test1', content: 'Test1Content' },
      { name: 'Test2', content: 'Test2UpdatedContent' }
    ];
    const shouldBePending = [
      { name: 'Test1', content: 'Test1Content' }
    ];

    const exitMock = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    run(APPROVED_STORIES, PENDING_STORIES, APPROVED_DIR_NAME, PENDING_DIR_NAME);

    const approvedFiles = getFilesRecursively(APPROVED_STORIES);
    const pendingFiles = getFilesRecursively(PENDING_STORIES);

    // Assert
    expect(approvedFiles).toHaveLength(shouldBeApproved.length);
    approvedFiles.forEach((file, index) => {
      expect(file).toContain(shouldBeApproved[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBeApproved[index].content);
    });

    expect(pendingFiles).toHaveLength(shouldBePending.length);
    pendingFiles.forEach((file, index) => {
      expect(file).toContain(shouldBePending[index].name);

      const fileContent = fs.readFileSync(file, { encoding: 'utf-8' });
      expect(fileContent).toBe(shouldBePending[index].content);
    });

    expect(exitMock).toHaveBeenCalled();
    exitMock.mockRestore();
  });
});
