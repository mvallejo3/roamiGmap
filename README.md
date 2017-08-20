# roamiGmap #

A jQuery plugin to easily insert google maps into any page.

### Requirements

* jQuery. [Get jQuery](https://code.jquery.com/)
* A Google Maps Javascript API key. You can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

#### Uses Grunt

If you are not familiar with how gurnt.js works you can find out more information [here](https://gruntjs.com/)

```cli
# install grunt and dependencies
$ npm install
# Run grunt
$ grunt
```

## Basic Use

To insert a map the first thing we must do is create a `div` and assign it a class or id so that we can reference it from our jQuery code on page load.

```html
<div class="gmap"></div>
```

Now, from our jquery code we can load the map. Make sure to do this when the document has loaded.

```js
$('.gmap')
.roamiGmap({
	key: '__your_API_key_here__',
	center: 'Chicago, IL',
});
```

## Search for places

You can search for places within your map like so:

```js
$('.gmap')
.roamiGmap({
	center: 'Chicago, IL',
	minHeight: 400, // we can also set a minHeight. Defaults to 300
	infowindow: { // this is the infowindow for the center of the map
		content: '<h1>Hello, This is Chicago, IL!</h1>',
	},
	// bind more actions once the map has loaded
	onMapLoad: function() {
		// search for Irish Pubs
		// this will display all Irish Pubs around our center
		this.searchPlaces({
			keyword: 'Irish Pubs',
		});
	}
});
```

## Customize your map

Aside from `center` which is required and `zoom` which is already part of defaults, you can pass any param that the Google Maps Javascript API takes when creating a map. The param `mapOptions` takes an object with all additional options you would like to pass. You can learn more about this [here](https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions).

Below is an example of passing `styles` to the `mapOptions` param.

```js
$('.gmap')
.roamiGmap({
	key: '__your_API_key_here__',
	center: 'Chicago, IL',
	mapOptions: {
		styles: [{
		  "elementType": "geometry",
		  "stylers": [{
		      "color": "#212121"
		  }]
		}, {
		  "elementType": "labels.icon",
		  "stylers": [{
		      "visibility": "off"
		  }]
		}, {
		// more styles
		}]
}
});
```

## All the Map Class methods at your disposal

`roamiGmap()` returns the DOM elment that you attach the map to, but with a few helpful properties added. For example the `gmap` object references the object instantiated with the `Map Class`. So you can use `gmap` to control your map.

Here's an example of increasing the `zoom` on your map by 5 after it has loaded. For a list of all the methods go [here](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map).

```js
$('.gmap')
.roamiGmap({
	center: 'Chicago, IL',
	onMapLoad: function(){
		var _zoom = this.gmap.getZoom();
		this.gmap.setZoom(_zoom + 5);
	}
});
```

## Making Parameters Global

When adding multiple maps into one page you may want to set some default paramters so that you don't have to pass them everytime you load a map. We'll use the global object `$.fn.roamiGmap.defaults` for that.

```js
// Set default key
$.fn.roamiGmap.defaults.key = '__your_API_key_here__';
```

===

## Changelog

**v1.0.0**
* Relaesed new plugin.