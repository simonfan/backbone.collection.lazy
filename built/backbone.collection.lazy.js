//     BackboneCollectionLazy
//     (c) simonfan
//     BackboneCollectionLazy is licensed under the MIT terms.

var lazyJsName="function"==typeof define?"lazy":"lazy.js";define("backbone.collection.lazy",["backbone",lazyJsName],function(e,t){function a(e){n.prototype[e]=function(){var a=t(this.models),n=Array.prototype.slice.call(arguments);return a[e].apply(a,n)}}var n=e.Collection.extend({}),l=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];return t(l).each(a),n});