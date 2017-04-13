<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Utility Prototype</title>
	<link href="css/main.css" type="text/css" rel="stylesheet" media="all" />
</head>

<body>
	
	<div class="ncstate-utility-bar" aria-label="NC State Brand Utility Bar">
		
		<div class="ncstate-utility-bar-tools">
			<div class="ncstate-utility-bar-wrapper ncstate-utility-bar-wrapper-primary" id="ncstate-utility-bar-wrapper-primary">
			
				<div class="ncstate-utility-bar-home">
					<a href="https://www.ncsu.edu">NC State Home</a>
				</div>

				<div class="ncstate-utility-bar-options">

					<div class="ncstate-utility-bar-toggle">
						<a id="ncstate-utility-bar-toggle-link" aria-label="Toggle resources" href="#">Resources</a>
						<div class="indicator"></div>
					</div>
				
					<div class="ncstate-utility-bar-search" role="search" aria-label="' + _ub.placeholder + '">
						
						<form action="https://www.ncsu.edu/search" name="navsearchform" class="ncstate-utility-bar-search-form">
	        
							<input id="navcx" name="cx" type="hidden" value="' + _ub.googleCustomSearchCode + '">
						    <input id="navcof" name="cof" type="hidden" value="FORID:11">
						    
							<input class="ncstate-utility-bar-search-field" id="search-input" name="q" type="search"
								placeholder="' + _ub.placeholder + '" aria-label="' + _ub.placeholder + '">
						 	<input type="submit" id="search-submit" name="search-submit" value="search"
								class="ncstate-utility-bar-search-submit">
				
						</form>
						
					</div>
					
				</div><!-- end options -->
		
			</div><!-- end util wrapper -->
		</div><!-- end tools -->
		
		<div class="ncstate-utility-bar-links is-hidden">
		
			<div class="ncstate-utility-bar-wrapper">

				<ul class="ncstate-utility-bar-primary-util">
					<li class="ncstate-utility-bar-primary-util ncstate-utility-bar-directory"><a href="https://www.ncsu.edu/directory/" id="ncstate-utility-bar-first-link">Campus Directory</a></li>
					<li class="ncstate-utility-bar-primary-util ncstate-utility-bar-mypack"><a href="https://mypack.ncsu.edu/">MyPack Portal</a></li>
					<li class="ncstate-utility-bar-primary-util ncstate-utility-bar-map"><a href="http://maps.ncsu.edu/">Campus Map</a></li>
					<li class="ncstate-utility-bar-primary-util ncstate-utility-bar-libraries"><a href="http://www.lib.ncsu.edu/">Libraries</a></li>
				</ul>
				
				<div class="ncstate-utility-bar-sec-util">
					<dl>
						<dt>Campus Resources</dt>
						<dd>
							<ul>
								<li><a href="https://housing.ncsu.edu/">University Housing</a></li>
								<li><a href="https://dining.ncsu.edu/">University Dining</a></li>
								<li><a href="http://shop.bookstore.ncsu.edu/">Bookstores</a></li>
								<li><a href="https://ncsu.transloc.com/">Wolfline Buses</a></li>
								<li><a href="https://www.ncsu.edu/calendars">Calendar</a></li>
							</ul>
						</dd>
					</dl>
					
					<dl>
						<dt>Academic Resources</dt>
						<dd>
							<ul>
								<li><a href="http://admissions.ncsu.edu/">Undergraduate Admissions</a></li>
								<li><a href="https://www.ncsu.edu/academics/departments-a-z/">Academic Departments</a></li>
								<li><a href="https://wolfware.ncsu.edu/">WolfWare</a></li>
								<li><a href="http://oia.ncsu.edu/">International Affairs</a></li>
								<li><a href="https://distance.ncsu.edu/">Distance Education</a></li>
							</ul>
						</dd>
					</dl>
					
					<dl>
						<dt>Other Resources</dt>
						<dd>
							<ul>
								<li><a href="http://treasurer.ofb.ncsu.edu/cashier/">Cashier's Office</a></li>
								<li><a href="http://registrar.ncsu.edu/">Registration and Records</a></li>
								<li><a href="http://financialaid.ncsu.edu/">Scholarships and Financial Aid</a></li>
								<li><a href="http://oe.ncsu.edu/">Outreach and Engagement</a></li>
								<li><a href="http://help.ncsu.edu/">NC State Help Desk</a></li>
							</ul>
						</dd>
					</dl>
					
					<dl>
						<dt>&nbsp;</dt>
						<dd>
							<ul>
								<li><a href="https://giving.ncsu.edu/">Giving</a></li>
								<li><a href="https://news.ncsu.edu/">NC State News</a></li>
								<li><a href="https://www.ncsu.edu/grad/">Graduate School</a></li>
								<li><a href="http://gmail.ncsu.edu/">Gmail Access</a></li>
								<li><a href="https://social.ncsu.edu/">NC State Social Media</a></li>
							</ul>
						</dd>
					</dl>
				</div>
				
			</div>
			
		</div>
	
	</div><!-- end util -->
	
	<script src="js/main.js"></script>
	
</body>
</html>