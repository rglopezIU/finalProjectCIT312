## Documentation
## Ruben Lopez
## Final Project CIT 312

# Introduction
This document provides an overview of the key features and implementation details of a responsive website developed using Bootstrap framework, CSS styling, and some Javascript.

Responsiveness in my project is primarily achieved through the use of Bootstrap's grid system. Bootstrap's grid system ensures a flexible and responsive layout that adapts to different screen sizes. But also ensuring that the content is correctly placed in the correct classes (content, container, card), greatly helps with any overlappping issues that are commonly caught

The hamburger menu is implemented using Bootstrap's navbar component. It functions as a collapsible menu that is triggered by clicking on the hamburger icon. I decided to place it in the middle of the page instead of on a certain corner. This is for easier readability on mobile devices (tested on my phone). Bootstrap's collapse plugin is utilized to toggle the visibility of the menu content. I made sure to use the same font attributes through most of the content for better user experience. By being consistent in this sense ensures better readability. 

My website includes a favicon, displayed in the browser tab, using the <link> tag in the <head> section. This tag is a simple P for the Purdue logo. I hope this isn't too simple.

Some of the cool and neat features that Bootstrap offers were very impactful on how clean and presentable my site looks. For example, with the grid system, it provides a responsive layout for all screen sizes. it almost replaces media queries (although its still best to include for images etc). The navbar component definitely simplified the bar creation, and implementation for devices. It seems much more responsive and easier to work with on the back end of things. The pre-styled components like buttons and cards included in Bootstrap greatly enhance the visualization and functionality of the site. In general it streamlines development, allowing for rapid prototypes and efficient development of responsive websites with minimal effort.

Accessibility is integrated into the website following best practices such as the following.
Semantic HTML, alt text for images, keyboard navigation, contrast and color accessibility. By incorporating these accessibility features, my website aims to provide an inclusive user experience for all users.