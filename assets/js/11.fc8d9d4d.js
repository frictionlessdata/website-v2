(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{270:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos1.92f0c35b.png"},271:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos2.d04a929b.png"},272:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos3.41defd34.png"},273:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos4.8d95dae7.png"},274:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos5.aa82e072.png"},275:function(e,t,a){e.exports=a.p+"assets/img/pescandodatos6.9e89ebcb.png"},388:function(e,t,a){"use strict";a.r(t);var o=a(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Causa Natura is a non-profit organization based in Mexico. It supports public policies to allow management of natural resources respecting human rights, equity, efficiency and sustainability. This project, “Pescando Datos” seeks to advocate for improved public policies for more than just subsidies allocation, through the collection of, analysis, and visualization of data around subsidies available to fishing communities in Mexico.")]),e._v(" "),o("p",[e._v("After an extended period of analysis a web platform is being built in order to explore data and visualize it with launch due for later in 2017. Following a meeting at csv,conf after a presentation by Adrià Mercader on "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=Gk2F4hncAgY&index=35&list=PLg5zZXwt2ZW5UIz13oI56vfZjF6mvpIXN",target:"_blank",rel:"noopener noreferrer"}},[e._v("‘Continuous Data Validation for Everybody’"),o("OutboundLink")],1),e._v(" we have piloted with Causa Natura to explore how our goodtables service can support the project. We spoke to Eduardo Rolón, Executive Director of Causa Natura and Gabriela Rodriguez who is working on the platform.")]),e._v(" "),o("h3",{attrs:{id:"problem-we-were-trying-to-solve"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#problem-we-were-trying-to-solve"}},[e._v("#")]),e._v(" Problem We Were Trying To Solve")]),e._v(" "),o("p",[e._v("Causa Natura are making a lot of freedom of Information requests in Mexico on information  to do with fishers in order to understand how policies are impacting people. The data is needed to support a range of stakeholders from the many co-op fisher communities to advocacy organisations.")]),e._v(" "),o("blockquote",[o("p",[e._v("Eduardo Rolón: Advocacy organizations, either from CSOs or from the fisheries sector may be more interested in data that evaluates and supports policy recommendations. Fisher communities have more immediate needs, such as how to obtain better governmental services and support.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Gabriela Rodriguez: The data is important to us because Campaigns and decisions will be made based on the analysis on the data Causa Natura collected. To be able to do the required analysis we need good data.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Gabriela Rodriguez: Currently, there is a tedious process of cleaning to give us data that can be worked on. Much of the data Causa Natura was using came as PDFs and needed to be processed. We process a lot of PDFs and Excel files and there are a lot of problems getting the OCR to capture the information correctly to csv. For example, names are not consistent and this causes us a lot of problems.")])]),e._v(" "),o("h2",{attrs:{id:"the-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-work"}},[e._v("#")]),e._v(" The Work")]),e._v(" "),o("h3",{attrs:{id:"software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),o("p",[e._v("goodtables was an existing Python library and web application developed by Open Knowledge International to support the validation of tabular datasets both in terms of structure and also with respect to a published schema as described above. We introduced goodtables in a "),o("a",{attrs:{href:"http://okfnlabs.org/blog/2015/02/20/introducing-goodtables.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),o("OutboundLink")],1),e._v(" earlier this year.")]),e._v(" "),o("p",[e._v("On top of that, Open Knowledge International has developed "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(", a web service for a continuous data validation that connects to different data sources to generate structure and content reports.")]),e._v(" "),o("h3",{attrs:{id:"what-did-we-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-did-we-do"}},[e._v("#")]),e._v(" What Did We Do")]),e._v(" "),o("p",[e._v("Let’s see how "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(" has helped to identify source and structural errors in the  Causa Natura pilot dataset:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(270),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("After we’ve signed in, we synchronize our GitHub repositories and activate the repository we want to validate ("),o("a",{attrs:{href:"https://github.com/frictionlessdata/pilot-causanatura",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/pilot-causanatura"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("p",[o("img",{attrs:{src:a(271),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("Once the repository is activated, every time there is an update on the data hosted on GitHub, the service will generate a validation report. This is how one of these reports looks like:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(272),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("Here, we see that there are 59 valid tables, but the report has  identified source and structural errors in 41 of the other tables hosted on the repository, including:")]),e._v(" "),o("ul",[o("li",[e._v("duplicate rows")]),e._v(" "),o("li",[e._v("duplicate headers")]),e._v(" "),o("li",[e._v("blank rows")]),e._v(" "),o("li",[e._v("missing values")])]),e._v(" "),o("p",[e._v("The full list of checks exercised by "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(" can be found in the "),o("a",{attrs:{href:"https://github.com/frictionlessdata/data-quality-spec/blob/master/spec.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Quality Spec"),o("OutboundLink")],1),e._v(". And the full report can be found "),o("a",{attrs:{href:"http://goodtables.io/github/frictionlessdata/pilot-causanatura/jobs/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("After identifying errors we went back do a manual cleanup of the data. As we mentioned, there is no need to run "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(" validation manually - it happens on any GitHub push for all activated repositories:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(273),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("If we need to customize a validation process we can put a goodtables.yml configuration file on the repository root, allowing us to tweak settings like the actual checks to perform, limit of rows to check, etc:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(274),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("And instant feedback is available via GitHub commit statuses and a "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(" badge that can be included in the README file:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(275),alt:"ADBio"}})]),e._v(" "),o("h2",{attrs:{id:"review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[e._v("#")]),e._v(" Review")]),e._v(" "),o("blockquote",[o("p",[e._v("Gabriela Rodriguez: Right now I have not been using it extensively yet but I have a lot of faith that it could get incorporated in the process of importing data into the Github repository. It should be easy to introduce into our workflow. I really like the process of hooks after git-push as I’m trying to get the organization to use Github for new data. I really like the validation part and that a report is generated each time data is pushed. This is very important and very useful. This makes it easier for the people who are doing the cleaning of data who may not have experience with GitHub.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Gabriela Rodriguez: The web interface needs a lot of usability work. But the idea is awesome.  There are problems and it is kind of hard to use at the moment as it takes a long time to sync repositories and the process is not clear, but i think it has a huge potential to make a difference to the work we are doing, mostly if people use Github to store data then it could make a difference.")])]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("h3",{attrs:{id:"areas-for-further-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#areas-for-further-work"}},[e._v("#")]),e._v(" Areas for further work")]),e._v(" "),o("blockquote",[o("p",[e._v("Gabriela Rodriguez: With continuous integration it would be very helpful to be notified with messages about the problems in the data. Perhaps emails notifications would be a good way to go, or integrations with other programs - Slack for example - would be fantastic.")])]),e._v(" "),o("p",[e._v("One thing to note is that all the errors shown following the analysis refer to the structure of the data files (missing headers, duplicate rows, etc). Including schema validation against some of the files would be a very logical next step in testing whether the contents of the data are what is expected). We are now planning to work with Causa Natura to take the steps to identify a subset of the data and create a base schema/data package that will be easily expandable and extendable.")]),e._v(" "),o("h3",{attrs:{id:"find-out-more"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#find-out-more"}},[e._v("#")]),e._v(" Find Out More")]),e._v(" "),o("p",[e._v("To explore for the yourself and collaborate, see the Pescando Datos project on "),o("a",{attrs:{href:"https://github.com/pescandodatos/datos",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),o("OutboundLink")],1),e._v(" and our goodtables  "),o("a",{attrs:{href:"http://goodtables.io/github/frictionlessdata/pilot-causanatura",target:"_blank",rel:"noopener noreferrer"}},[e._v("reports"),o("OutboundLink")],1),e._v(" from the project.")])])}),[],!1,null,null,null);t.default=r.exports}}]);