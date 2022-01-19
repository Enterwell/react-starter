/**
 * Decorator used in Storybook stories when the full view port height is needed.
 * It expands the Storybook canvas container to its full height.
 * 
 * @param {Component} Story Story component
 * @returns Decorated story component
 */
export const fullHeightStoryDecorator = (Story) => (
    <div style={{ height: '100vh' }}>
        <Story />
    </div>
);