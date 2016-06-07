.. _courses:

====================
Degree Schemes
====================

So you have inputed all of the modules into the system (see :ref:`modules` for
how to do this) we now need to go about adding the degree schemes into the
database.  Degree scheme infomation is kept in the :code:`courses.yml` file in
the :code:`_data` folder. Like we did when we added modules there are several
peices of infomation that we need before we can add a scheme:

* The national code for the degree (the UCAS code in the UK)
* Name of the degree
* Module codes for the 1 :sup:`st` year core and/or option modules
* Module codes for the 2 :sup:`nd` year core and/or option modules
* etc... (continue for each year of the degree)

Example degree
===================

The degree that I am going to add is called BSc Mathematics and has the degree
code G100.  This degree is three years long, and consits of the following module
codes:

* 1 :sup:`st` year core: ma1001, ma1004, ma1005, ma1007, ma1500, ma1006, ma1003
* 1 :sup:`st` year otional: ma0111, ma1300, ma1501
* 2 :sup:`nd` year core: ma0221, ma0212, ma2004, ma2001, ma2002, ma2003
* 2 :sup:`nd` year optional: ma0235, ma2005, ma2500, cm2203, ma2501, ma0213,	cm2207
* 3 :sup:`rd` year optional: ma0332, ma3505, ma3504, ma3602, ma3601, ma3901, cm3201, cm3111

This is what you write in courses.yml::

	- degree-code: G100
	  name: BSc Mathematics
	  modules:
		  - core: ['ma1001', 'ma1004', 'ma1005', 'ma1007', 'ma1500', 'ma1006', 'ma1003']
			optional: ['ma0111', 'ma1300', 'ma1501']

		  - core: ['ma0221', 'ma0212', 'ma2004', 'ma2001', 'ma2002', 'ma2003']
			optional: ['ma0235', 'ma2005', 'ma2500', 'cm2203', 'ma2501', 'ma0213',	'cm2207']

		  - optional: ['ma0332', 'ma3505', 'ma3504', 'ma3602', 'ma3601', 'ma3901', 'cm3201', 'cm3111']


Now that we have added BSc Mathematics to the database, we now need to create
the html file for it.  This is housed in each of the folders where its name is
the international code for a language that is used in on the site. (In the
orignal repository for this we have two languages- Welsh and English therefore
we have two folders called :code:`cy` and :code:`en` respectivly that hold the
html files for the degrees).

In the G100.html file in en folder you would write::

	---
	layout: course
	degree-code: G100
	lang: en
	---

In the G100.html file in the cy folder the only difference would be that you
write :code:`lang: cy` instead.
