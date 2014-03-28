<?php header('Content-Type: application/javascript'); ?>
	
var _bb = _bb || {};
	
<?php if(isset($_GET['searchDomain']) || strlen($_GET['searchDomain']) > 0): ?>
	_bb.searchDomain = '<?php echo $_GET['searchDomain']; ?>';
<?php endif; ?>

<?php if(isset($_GET['color']) || strlen($_GET['color']) > 0): ?>
	_bb.color = '<?php echo $_GET['color']; ?>';
<?php endif; ?>

<?php if(isset($_GET['maxWidth']) || strlen($_GET['maxWidth']) > 0): ?>
	_bb.maxWidth = '<?php echo $_GET['maxWidth']; ?>';
<?php endif; ?>

(function(){
	var bar = document.createElement('script'); bar.type = 'text/javascript'; bar.async = true;
	bar.src = ('https:' == document.location.protocol ? 'http://ssl' : 'http://www') + '.webcommdev.com/utility/load-brand-bar.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bar, s.nextSibling);
})();