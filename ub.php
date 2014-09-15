<?php header('Content-Type: application/javascript'); ?>
	
var _ub = _ub || {};
	
<?php if(isset($_GET['googleCustomSearchCode']) || strlen($_GET['googleCustomSearchCode']) > 0): ?>
	_ub.googleCustomSearchCode = '<?php echo urlencode($_GET['googleCustomSearchCode']); ?>';
<?php endif; ?>

<?php if(isset($_GET['color']) || strlen($_GET['color']) > 0): ?>
	_ub.color = '<?php echo urlencode($_GET['color']); ?>';
<?php endif; ?>

<?php if(isset($_GET['maxWidth']) || strlen($_GET['maxWidth']) > 0): ?>
	_ub.maxWidth = '<?php echo urlencode($_GET['maxWidth']); ?>';
<?php endif; ?>

<?php if(isset($_GET['placeholder']) || strlen($_GET['placeholder']) > 0): ?>
  _ub.placeholder = '<?php echo rawurlencode($_GET['placeholder']); ?>';
<?php endif; ?>

(function(){
	var bar = document.createElement('script'); bar.type = 'text/javascript'; bar.async = true;
	bar.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/load-utility-bar.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bar, s.nextSibling);
})();