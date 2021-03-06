import {config} from './index.config';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {EmojiPages} from './services/emoji-pages.service';
import {Utils} from './services/utils.service';
import {imagifyFilter} from './filters/imagify.filter'
import {toClassName} from './filters/to-class-name.filter';
import {imagifySingleFilter} from './filters/imagify-single';
import {emojiPickerComponent} from './components/emoji-picker.component';
import {onScrollDirective} from './directives/on-scroll.directive';
import {emojiAreaDirective} from './directives/emoji-area.directive';

angular.module('bfEmojiPickerAngular', ['ngSanitize', 'ui.bootstrap'])
  .config(config)
  .run(runBlock)
  .service('EmojiPages', EmojiPages)
  .service('bfEmojiPickerUtils', Utils)
  .filter('imagify', imagifyFilter)
  .filter('imagifySingle', imagifySingleFilter)
  .filter('toClassName', toClassName)
  .component('emojiPicker', emojiPickerComponent)
  .directive('pickerScroll', onScrollDirective)
  .directive('emojiArea', emojiAreaDirective)
  .controller('MainController', MainController);
