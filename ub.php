<?php header('Content-Type: application/javascript'); ?>
	
var _ub = _ub || {};
	
<?php if( !empty($_GET['googleCustomSearchCode']) ): ?>
	_ub.googleCustomSearchCode = '<?php echo htmlspecialchars($_GET['googleCustomSearchCode'], ENT_QUOTES | ENT_HTML5); ?>';
<?php endif; ?>

<?php if( !empty($_GET['color']) ): ?>
	_ub.color = '<?php echo urlencode($_GET['color']); ?>';
<?php endif; ?>

<?php if( !empty($_GET['maxWidth']) ): ?>
	_ub.maxWidth = '<?php echo intval($_GET['maxWidth']); ?>';
<?php endif; ?>

<?php if( !empty($_GET['placeholder']) ): ?>
  _ub.placeholder = '<?php echo rawurlencode($_GET['placeholder']); ?>';
<?php endif; ?>

<?php if( !empty($_GET['showBrick']) ): ?>
  _ub.showBrick = 1;
<?php endif; ?>

(function(){
	var bar = document.createElement('script'); bar.type = 'text/javascript'; bar.async = true;
	bar.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/load-utility-bar.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bar, s.nextSibling);
})();
