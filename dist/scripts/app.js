/******/!function(e){function n(t){if(i[t])return i[t].exports;var o=i[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var i={};return n.m=e,n.c=i,n.p="",n(0)}([function(e,n,i){"use strict";var t=i(1),o=i(2),r=i(3),a=i(4),s=i(5),c=i(6),l=i(7);angular.module("bfEmojiPickerAngular",["ngSanitize","ui.bootstrap"]).config(t.config).run(o.runBlock).service("EmojiPages",a.EmojiPages).filter("imagify",s.imagifyFilter).filter("toClassName",c.toClassName).component("emojiPicker",l.emojiPickerComponent).controller("MainController",r.MainController)},function(e,n){"use strict";function i(e){"ngInject";e.debugEnabled(!0)}i.$inject=["$logProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=i},function(e,n){"use strict";function i(e){"ngInject";e.debug("runBlock end")}i.$inject=["$log"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=i},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});n.MainController=function t(){i(this,t),this.message="test"}},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}();n.EmojiPages=function(){function e(){i(this,e);var n=["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rolling_floor_aughing","relaxed","blush","innocent","slightly_smiling_face","sarcasm","wink","relieved","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","stuck_out_tongue","money_mouth_face","hugging","nerd_face","sunglasses","clown_face","cowboy","smirk","unamused","disappointed","pensive","worried","confused","slightly_sad","megafrown","persevere","confounded"],t=["weary","tired_face","triumph","angry","rage","no_mouth","neutral_face","expressionless","hushed","frowning","anguished","open_mouth","astonished","dizzy_face","flushed","scream","fearful","cold_sweat","disappointed_relieved","cry","drool","sob","sweat","sleepy","sleeping","eye_roll","thinking","liar","grimacing","zipper_mouth","disgust","gesundheit","mask","thermometer_face","injured","smiling_imp","imp","open_hands","raised_hands","clap"],o=["pray","handshake","thumbsup","thumbsdown","facepunch","fist","left_fist_bump","right_facing_fist","good_luck","v","sign_horns_hand","ok_hand","point_left","point_right","point_up_2","point_down","point_up","hand","backhand","splayed_hand","spock","wave","shaka","muscle","middle_finger","writing_hand","poop","dark_sunglasses","fire","rainbow","star","sunny","sun_small_cloud","sun_behind_large_cloud","cloud","cloud_with_rain","thunder","snowflake","dash","droplet","umbrella"];this.all=n.concat(t,o),this.pages=[{name:"Page 1",icons:n},{name:"Page 2",icons:t},{name:"Page 3",icons:o}]}return t(e,[{key:"getRegExp",value:function(){return new RegExp(":("+this.all.join("|")+"):","g")}}]),e}()},function(e,n){"use strict";function i(e){"ngInject";var n=e.getRegExp();return function(e){return e?e.replace(n,function(e,n){var i=n.replace(/_/g,"-");return'<img class="emoji emoji-'+i+'" title=":'+i+':" alt="'+i+'">'}):""}}i.$inject=["EmojiPages"],Object.defineProperty(n,"__esModule",{value:!0}),n.imagifyFilter=i},function(e,n){"use strict";function i(){"ngInject";return function(e){return e?e.replace(/_/g,"-"):""}}Object.defineProperty(n,"__esModule",{value:!0}),n.toClassName=i},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}();n.emojiPickerComponent={template:'\n     <i class="emoji-picker"\n       uib-popover-template="\'app/templates/emoji-popover.html\'"\n       popover-is-open="$picker.open"\n       popover-placement="{{ !$picker.placement && \'left\' || $picker.placement }}"\n       popover-title="{{ ::$picker.title }}"><ng-transclude></ng-transclude></i>\n  ',require:{model:"^ngModel"},transclude:!0,bindings:{open:"<",placement:"@",title:"@",onChangeFunc:"&"},controllerAs:"$picker",controller:function(){function e(n,t){"ngInject";i(this,e),this.$element=n,this.pages=t.pages||[]}return e.$inject=["$element","EmojiPages"],t(e,[{key:"$onInit",value:function(){var e=this;this.selectedPage=this.pages[0],this.model.$render=function(){return e.model.$viewValue||""}}},{key:"append",value:function(e){var n=this.model.$viewValue||"";n+=" :"+e+":",angular.isFunction(String.prototype.trim)&&(n=n.trim()),this.model.$setViewValue(n),this.triggerOnChange()}},{key:"selectPage",value:function(e){this.selectedPage=e}},{key:"triggerOnChange",value:function(){this.onChangeFunc()}}]),e}()}}]),angular.module("bfEmojiPickerAngular").run(["$templateCache",function(e){e.put("app/templates/emoji-popover.html",'<div class=emoji-picker__container><div class=emoji-picker__icons><i class="emoji emoji-{{ ::emoji | toClassName }}" ng-repeat="emoji in $picker.selectedPage.icons" ng-click=$picker.append(emoji)></i></div><div class=emoji-picker__pages><span class=emoji-picker__pages--item ng-repeat="page in ::$picker.pages" ng-class="{\'active\': page.name === $picker.selectedPage.name}" ng-click=$picker.selectPage(page)></span></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app.js.map