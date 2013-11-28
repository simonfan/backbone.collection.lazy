//     BackboneCollectionLazy
//     (c) simonfan
//     BackboneCollectionLazy is licensed under the MIT terms.

var lazyJsName=typeof define=="function"?"lazy":"lazy.js";define(["backbone",lazyJsName],function(e,t){function i(e){n.prototype[e]=function(){var n=t(this.models),r=Array.prototype.slice.call(arguments);return n[e].apply(n,r)}}var n=e.Collection.extend({}),r=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];return t(r).each(i),n});