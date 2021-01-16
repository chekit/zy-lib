import { CheckboxComponent } from 'projects/zy-lib/src/public-api';

export default {
    title: 'Basic Checkboxs Component',
    excludeStories: /.*Data$/,
    parameters: {
        notes: 'some documentation here',
    },
};

export const Unchecked = () => ({
    component: CheckboxComponent,
    props: {
        checked: false
    },
});

export const Checked = () => ({
    component: CheckboxComponent,
    props: {
        checked: true
    },
});

export const Disabled = () => ({
    component: CheckboxComponent,
    props: {
        disabled: true
    },
});
