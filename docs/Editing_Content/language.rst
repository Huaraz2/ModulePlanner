.. _language:

=============
Languages
=============

The default language for the Module Planner website is English but you also have
the option to view it in Welsh.  To add another language to the database you
need to input data into the :code:`language.yml` file in the :code:`_data`
folder.  Before you add a new language, you need to get the translations for the
following words/phrases:

* Year
* here
* Theme
* Credits
* Language
* Requires
* More info
* Clear Selected
* Credits chosen
* Please choose your degree
* Change your degree scheme
* This is only the standard modules you can take during your degree, to see all the possible modules for your degree please click
* As this is maintainted by students, the infomation may not be completely correct.

You also need the international language code (see `Language-codes
<http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/>`_
for help) for your language and the translation of your school name.

Example: Adding Spanish
===========================

The international language code for Spanish is :code:`es` and the name of my
school is: :code:`School of Mathematics` which in Spanish is:
:code:`Escuela de Matemáticas`.  The Spanish translations of the above
words/phrases are:

* Año
* aquí
* Tema
* Claro Seleccionada
* Crédito
* Idioma
* Requiere
* Más información
* Por favor elija su grado
* Cambiar su esquema de grado
* Créditos elegidos
* Esto es sólo los módulos estándar que puede tomar durante su grado, para ver todos los posibles módulos para obtener su título por favor haga clic
* Como esto se maintainted por los estudiantes, la infomación puede no ser del todo correcta.

This is what you write in language.yml::

	- name: Es
	  year: Año
	  here: aquí
	  theme: Tema
	  reset: Claro Seleccionada
	  credits: Crédito
	  language: Idioma
	  requires: Requiere
	  more-info: Más información
	  select-deg: Por favor elija su grado
	  change-deg: Cambiar su esquema de grado
	  school-name: Escuela de Matemáticas
	  language-code: es
	  credits-chosen: Créditos elegidos
	  more-options: Esto es sólo los módulos estándar que puede tomar durante su grado, para ver todos los posibles módulos para obtener su título por favor haga clic
	  disclaimer: Como esto se maintainted por los estudiantes, la infomación puede no ser del todo correcta.

And you would finally create a folder in the base directory called :code:`es`
where you will put the spanish version of the degree html files.
