# Yu-Gi-Oh! Best Deck

## Overview

## Tech Stack

### Programming Language

- Typescript

### Back-End

- Express

### Data

- Yu-Gi-Oh! API

## Setup

## API Docs

### Attributes

- id (Number)

- name (String)

- type (String)

- desc (String)

- race (String)

- archetype (String)

- card_sets (Array of Objects)

  - set_name (String)

  - set_code (String)

  - set_rarity (String)

  - set_rarity_code (String)

  - set_price (String)

- card images (Array of Objects)
  
  - id (Number)

  - image_url (String)

  - image_url_small (String)

- card_prices (Array of Objects)
  
  - cardmarket_price (String)

  - tcgplayer_price (String)

  - ebay_price (String)

  - amazon_price (String)

  - coolstuffinc_price (String)

## Reference

Setup the project by following the steps below.

- Clone the repository.

- Install dependencies by using NPM or Yarn depends on yours.

  - If you use NPM, Please following the command below for Installing the dependencies.  
  `npm install`

  - If you use Yarn, Please following the command below for Installing the dependencies.  
  `yarn`

- Running in Development Mode. by following the command below.

  - If you use NPM, Please following the command below for Installing the dependencies.  
 `npm build && npm run dev`
    - And if you run the command successfully you don't need to use `npm run dev` again you just need to use `npm build` to build the js files. and nodemon will update the server automatically.

  - If you use Yarn, Please following the command below for Installing the dependencies.  
 `yarn build && yarn dev`
    - And if you run the command successfully you don't need to use `yarn dev` again you just need to use `npm build` to build the js files. and nodemon will update the server automatically.
