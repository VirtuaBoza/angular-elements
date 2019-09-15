import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { FancyFormModule } from 'fancy-form';

export const actions = {
  customSubmit: action('customSubmit'),
};

storiesOf('FancyForm', module).add('default', () => ({
  template: `<fancy-form [username]="username" (customSubmit)="onSubmit($event)"></fancy-form>`,
  props: {
    username: 'VirtuaBoza',
    onSubmit: actions.customSubmit,
  },
  moduleMetadata: {
    imports: [FancyFormModule],
  },
}));
