Who wants to be a millionaire basic game.
Levels are generated automatically throw JSON file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run prepare`

Runs once the husky preparation script.\
You will be able to see any lint errors on `git push`.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Manualy runs eslint check with automatically fixing if possible.

## Working with levels.json

### Add new question
`id` - Must be an unique positive number, levels are sorted asc by this param.
`amount` - Stick to id param, bigger id bigger amount you use.
`questions` - You can add as many questions as yoQuestions generated automaticaly thow JSON file.u want for one level. Question for the game will be picked randomly. 
`answers` - You can add any number of answers. To proceed to next level answers should contain at least one answer setted to true.

Example:

```
{
  "id": 1,
  "amount": "$500",
  "questions": [
    {
      "text": "Which two words traditionally appear onscreen at the termination of a feature film",
      "answers": [
        {
          "text": "The End",
          "isCorrect": true
        },
        {
          "text": "The Conclusion",
          "isCorrect": false
        },
      ]
    },
  ]
},
```