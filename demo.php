<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Utility Prototype</title>
<?php
	$params = array(
		'googleCustomSearchCode' => "\"></form></div></div></div></div><a onmouseover=\"alert('googleCustomSearchCode');\" style=\"position: absolute; width: 100%; height: 100%; background-color: blue; top: 0; left: 0; z-index: 99999;\">&nbsp;</a><div><div><div><div><form><input type=\"hidden\" name=\"fake\" value=\"",
		'maxWidth' => "1100';alert('__maxWidth__');//\"></form></div></div></div></div><a onmouseover=\"alert('maxWidth');\" style=\"position: absolute; width: 100%; height: 100%; background-color: gray; top: 50px; left: 0; z-index: 99999;\">&nbsp;</a><div><div><div><div><form><input type=\"hidden\" name=\"fake\" value=\"",
		'color' => "gray';alert('__color__ ' + document.cookie);//'\"></form></div></div></div></div><a onmouseover=\"alert('color');\" style=\"position: absolute; width: 100%; height: 100%; background-color: yellow; top: 150px; left: 0; z-index: 99999;\">&nbsp;</a><div><div><div><div><form><input type=\"hidden\" name=\"fake\" value=\"",
		'placeholder' => "\"></form></div></div></div></div><a onmouseover=\"alert('placeholder');\" style=\"position: absolute; width: 100%; height: 100%; background-color: green; top: 100px; left: 0; z-index: 99999;\">&nbsp;</a><div><div><div><div><form><input type=\"hidden\" name=\"fake\" value=\"",
		'showBrick' => "1';alert('__showBrick__');//\"></form></div></div></div></div><a onmouseover=\"alert('showBrick');\" style=\"position: absolute; width: 100%; height: 100%; background-color: red; top: 100px; left: 0; z-index: 99999;\">&nbsp;</a><div><div><div><div><form><input type=\"hidden\" name=\"fake\" value=\"",
	);
?>
	<script src="ub.php?<?php echo htmlspecialchars(http_build_query($params)); ?>"></script>
</head>

<body>

	<a class="skip-main" href="#main">Skip to main content</a>
	<div id="ncstate-utility-bar"></div>
	<div id="second"></div>
	<div id="main" tabindex="-1"></div>
</body>
</html>