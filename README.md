# post-image-links

This plugin currenly requires hacking the Core post.hbs file.  
```
 app/assets/javascripts/discourse/templates/post.hbs
      <!-- keep the classes here in sync with composer.hbs -->
      <div {{bind-attr class="showUserReplyTab:avoid-tab view.repliesShown::contents :regular view.extraClass"}}>
        <div class='cooked'>
          {{{cooked}}}
		  {{plugin-outlet "in-cooked"}}
        </div>
        {{#if cooked_hidden}}
          <a href {{action "expandHidden" this}}>{{i18n 'post.show_hidden'}}</a>
        {{/if}}
```  

Links need to be right-click open-in-new to work else results in the No Permission page.  

## Installation

Clone or Unzip the plugin folders into your Discourse plugins directory. 

## Authors

Mittineague

## License

GNU GPL v2 

## Support 

I'm still learning so you are most likely a better coder than I am, but I frequently visit these forums and either I or others should be able to help.  
[SitePoint](http://community.sitepoint.com/)  
[Discourse Meta](https://meta.discourse.org/)  
