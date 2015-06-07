Ember.Handlebars.helper('post-image-links', function(param) {
  var output = " ";
	var str_html_obj = $.parseHTML(param);
	var img_found = false;
	var img_attr_arr = [];
  $(str_html_obj).find("img").each(function(i){
    if(this.getAttribute("class") === "avatar") {
     return;
    }
    img_found = true;
    img_attr_arr[i] = this.src;
  });
  if (img_found) {
		output += '<div class="get-img">Post Image Links ';
		for (var i = 0; i < img_attr_arr.length; i++) {
			img_attr_arr[i] = img_attr_arr[i].replace(/img src="/, '');
			img_attr_arr[i] = img_attr_arr[i].replace(/"/, '');
			var domain = window.location.origin;
			var ext_expr = /http/;
			if (ext_expr.test(img_attr_arr[i])) {
			  domain = "";
			}
			var filename_expr = /[^\/]*$/gm;
			var filename_match = img_attr_arr[i].match(filename_expr);
			var filename = "";
			if (filename_match[0]) {
			  filename_match[0] = filename_match[0].replace(/\//, '');
				filename_match[0] = filename_match[0].replace(/\?(.)*/, '');
				filename = filename_match[0];
			}
			output += '<br /><a href="'
			+ domain + img_attr_arr[i]
			+ '">' + filename + '</a>';
		}
		output += '</div>';
  }
	return output;
});
