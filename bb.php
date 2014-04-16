<?php header('Content-Type: application/javascript'); ?>
	
var _bb = _bb || {};
	
<?php if(isset($_GET['googleCustomSearchCode']) || strlen($_GET['googleCustomSearchCode']) > 0): ?>
	_bb.googleCustomSearchCode = '<?php echo $_GET['googleCustomSearchCode']; ?>';
<?php endif; ?>

<?php if(isset($_GET['color']) || strlen($_GET['color']) > 0): ?>
	_bb.color = '<?php echo $_GET['color']; ?>';
<?php endif; ?>

<?php if(isset($_GET['maxWidth']) || strlen($_GET['maxWidth']) > 0): ?>
	_bb.maxWidth = '<?php echo $_GET['maxWidth']; ?>';
<?php endif; ?>

(function(){
	var bar = document.createElement('script'); bar.type = 'text/javascript'; bar.async = true;
	bar.src = ('https:' == document.location.protocol ? 'http://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/load-brand-bar.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bar, s.nextSibling);
})();