# FunimationAssist  
Speed up Funimation videos, change brightness/contrast/saturation.  
  
Run this JavaScript in your browser when viewing a Funimation video player page to add the ability to speed up anime videos. Browsers currently respect the range of 0.5x to 4x, so this tool enforces that range. The interface is a slider.  
  
You also have the option of adjusting color settings. The usual workflow there is to raise some values and lower others.  
  
You can also create a bookmark with the URL/link being the funimationAssistBookmarklet.txt text. Then, whenever you click on the bookmark, it will run the script. Bookmarks that run JavaScript instead of going to a webpage are called bookmarklets.  
  
Use case  
Sometimes, anime series are too slow. Instead of wasting time trudging through them, just use this tool to speed them up a little bit.  
  
Some Funimation anime series seem to have color issues. Videos may appear too dark/color-similar, or too bright and washed out. Use this tool to perform enough corrections to make such series more watchable.  
  
Why this works  
Recently [end of 2016, beginning of 2017], Funimation decided to redo their website and, for whatever reason, decided to use an HTML5 video player instead of their traditional Flash video player. This allows for customer scripting - abilities that were previous made difficult because the video was sitting behind Flash.  
  
Everything that could go wrong, within reason  
• Funimation could change the way they set up their video element, breaking this script  
• You could be using an old web browser, one that doesn't support the JavaScript code that I wrote  