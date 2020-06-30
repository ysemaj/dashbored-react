# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [About](#about)
  - [Technical Notes](#technical-notes)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Licence](#licence)
  - [Contact](#contact)

## Introduction

[dashbo.red](https://www.dashbo.red) is a cloud-enabled, mobile-friendly, SaaS application built using React and NodeJS.

## About

Hi, my name is James, and I'm the sole founder (and developer) of dashbored. You might be asking yourself, what is dashbored? Well, the underlying premise is to create an online platform which can be used by student societies at higher education institutions (Universities in Europe and Colleges in America) to streamline their operating processes. Having been part of the management of a student society whilst at University, I quickly realised that to effectively manage a society a whole plethora of digital platforms, services, and software were needed. Therefore, to help future societies I decided to give making my own solution a shot.

## Technical Notes

As stated in the [Introduction](#introduction) dashbored is built using React and NodeJS. However, the dashbored architecture is much more elaborate and sophisticated than just that.

### Frontend

On the frontend dashbored uses Node to run create-react-app with some additional middleware dependencies such as axios for API requests, and react-router to sync the URL bar with the page content. In terms of design, dashbored uses third party dependencies such as Animate.css, Bootstrap, FontAwesome, as well as some custom stylesheets.

### Backend

The backend of dashbo.red is hosted on AWS and uses a variety of services to achieve different functions. The architecture design is to use a serverless framework to avoid the cost of provisioning servers. If you're interested in the architecture design then check out the ['dashbored architecture'](./dashbored-architecture.jpg).

## Licence

dashbored uses the MIT licence.

## Contact

To contact me please email [james@dashbo.red](mailto:james@dashbo.red)
