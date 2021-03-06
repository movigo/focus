<p align="center">
    <h1 align="center">
        <img width="40" src="https://raw.githubusercontent.com/movigo/core/master/resources/icon.png">
        Movigo Focus Plugin
    </h1>
    <p align="center">Movigo plugin to create focus animations.</p>
</p>
    
<p align="center">
    <a href="https://github.com/movigo/focus/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/movigo/focus.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/focus" target="_blank">
        <img src="https://img.shields.io/david/movigo/focus.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/focus?type=dev" target="_blank">
        <img src="https://img.shields.io/david/dev/movigo/focus.svg?style=flat-square">
    </a>
</p>

________________________________

## :paperclip: Table of Contents
- :hammer: [Install](#hammer-install)
- :video_game: [Usage](#video_game-usage)
- :chart_with_upwards_trend: [Development](#chart_with_upwards_trend-development)
  - :scroll: [Rules](#scroll-rules)
    - [Commits](#commits)
    - [Branches](#branches)
- :page_facing_up: [License](#page_facing_up-license)
- :telephone_receiver: [Contacts](#telephone_receiver-contacts)
  - :boy: [Developers](#boy-developers)

## Install

### NPM

You can install Movigo focus plugin with NPM:

```bash
npm install @movigo/focus --save
```
    
### CDN

You can also load it with CDNs:
    
```html
  <script src="https://unpkg.com/@movigo/core"></script> <!-- Required dependency -->
  <script src="https://unpkg.com/@movigo/focus"></script>
```

## Usage

Focus plugin function creates an animation to focus an element by scaling it and obscuring the other background elements. In this way two keyframes are created, or if no element is selected, all the elements are reset to the initial conditions with a unique keyframe.

It is possible to select the element to focus and define the size of the scaling, the brightness of the background elements, the duration and the easing function of the animation. Default values assume a large transaction area.

```js
  const images = document.querySelectorAll('img')

  movigo.target(images).focus({
    element: 1, // Index of the element to focus (default: -1 -> no focused elements)
    scale: [1.5, 1.5], // Dimensions to scale focused element (default: [2, 2]) 
    backdropBrightness: 80, // Backdrop element brightness in % (default: 60)
    duration: .5, // Animation duration (default: .3)
    easing: 'linear', // Easing function (default: cubic-bezier(0.34, 1.56, 0.64, 1))
  }).animate()
``` 

## :chart_with_upwards_trend: Development

### :scroll: Rules

#### Commits

* Use this commit message format (angular style):  

    `[<type>] <subject>`
    `<BLANK LINE>`
    `<body>`

    where `type` must be one of the following:

    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code
    - refactor: A code change that neither fixes a bug nor adds a feature
    - test: Adding missing or correcting existing tests
    - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
    - update: Update of the library version or of the dependencies

and `body` must be should include the motivation for the change and contrast this with previous behavior (do not add body if the commit is trivial). 

* Use the imperative, present tense: "change" not "changed" nor "changes".
* Don't capitalize first letter.
* No dot (.) at the end.

#### Branches

* There is a master branch, used only for release.
* There is a dev branch, used to merge all sub dev branch.
* Avoid long descriptive names for long-lived branches.
* No CamelCase.
* Use grouping tokens (words) at the beginning of your branch names (in a similar way to the `type` of commit).
* Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow.
* Use slashes to separate parts of your branch names.
* Remove branch after merge if it is not important.

Examples:
    
    git branch -b docs/README
    git branch -b test/one-function
    git branch -b feat/side-bar
    git branch -b style/header

## :page_facing_up: License
* See [LICENSE](https://github.com/movigo/focus/blob/master/LICENSE) file.

## :telephone_receiver: Contacts
### :boy: Developers

#### Cedoor
* E-mail : me@cedoor.dev
* Github : [@cedoor](https://github.com/cedoor)
* Website : https://cedoor.dev
