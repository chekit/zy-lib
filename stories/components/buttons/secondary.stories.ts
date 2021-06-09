import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { ButtonModule } from 'projects/zy-lib/src/public-api';
import { baseSettings } from 'stories/shared/basic-storries-settings';
import { config } from 'storybook-addon-xd-designs';
import { XDConfig2020 } from 'storybook-addon-xd-designs/lib/config';

export default {
    ...baseSettings,
    title: 'Components/Buttons/Secondary',
    parameters: {
        badges: ['beta'],
        design: config({
            artboardUrl: 'https://xd.adobe.com/view/ae7472ea-b4ac-47c4-4eb9-7aff91446d91-d845/screen/ca95c951-f010-498f-84c6-1cf10f344616/Desktop',
        } as XDConfig2020)
    },
    decorators: [
        moduleMetadata({
            // imports both components to allow component composition with storybook
            imports: [CommonModule, ButtonModule],
        }),
    ],
};

export const actionsData = {
    onClickTask: action('Click main button!'),
    onClickItem: action('Click item button!'),
};

export const Default = () => ({
    template: `
        <zy-button
            type="default"
            color="default"
            (onClick)="onClick($event)"
        >
            Secondary Button
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Outlined = () => ({
    template: `
        <zy-button
            type="outlined"
            color="default"
            (onClick)="onClick($event)"
        >
            Secondary Button
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Loading = () => ({
    template: `
        <zy-button
            type="default"
            color="default"
            [isLoading]="true"
            (onClick)="onClick($event)"
        >Secondary Button</zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Ghost = () => ({
    template: `
        <zy-button
            type="ghost"
            color="default"
            (onClick)="onClick($event)"
        >
            Secondary Button
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const Disabled = () => ({
    template: `
        <zy-button
            type="default"
            color="default"
            (onClick)="onClick($event)"
            disabled="true"
        >
            Secondary Button
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const ComboWithoutSubItems = () => ({
    template: `
        <zy-button
            type="split"
            color="default"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Secondary Button</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});

export const ComboWitSubItemsAndOneCallback = () => ({
    template: `
        <zy-button
            type="split"
            color="default"
            [items]="[{title: 'Combo item 1', onClick: onItemClick}, {title: 'Combo item 2'}]"
            (onClick)="onClick($event)"
        >
            <ng-container split-text>Secondary Button</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask,
        onItemClick: actionsData.onClickItem
    },
});


export const ComboDisabled = () => ({
    template: `
        <zy-button
            type="split"
            color="default"
            [items]="[{title: 'Combo item 1'}, {title: 'Combo item 2'}]"
            (onClick)="onClick($event)"
            disabled="true"
        >
            <ng-container split-text>Secondary Button</ng-container>
        </zy-button>
    `,
    props: {
        onClick: actionsData.onClickTask
    },
});