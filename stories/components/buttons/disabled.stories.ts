import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Disabled',
    parameters: {
        badges: ['beta']
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click disabled button!'),
};

export const Default = () => ({
    template: `
        <zy-button
            type="default"
            color="default"
            (onClick)="onClick($event)"
            disabled="true"
        >
            Default
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Primary = () => ({
    template: `
        <zy-button
            type="default"
            color="primary"
            (onClick)="onClick($event)"
            disabled="true"
        >
            Primary Action
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const WithIcon = () => ({
    template: `
        <zy-button
            type="default"
            color="primary"
            (onClick)="onClick($event)"
            disabled="true"
        >
            <span icon>+</span>With Icon
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Rounded = () => ({
    template: `
        <zy-button
            type="round"
            color="primary"
            (onClick)="onClick($event)"
            disabled="true"
        >
            <span icon>+</span>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});