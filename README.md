# Front End Project - Zelda Quiz App

## Description
A one-page application to test users' knowledge of the Legend of Zelda Series.

The quiz takes data from a file and uses that to generate the questions themselves, no hardcoded questions you could theoretically "brute force" your way through by simple memorisation. The file is a JSON dataset of dungeons in the Legend of Zelda series, covering most of the mailnine entries.

The quiz can be found [Here.](https://c-foarce.github.io/online-quiz/)

### Features
- Randomised generation of questions
- Dynamic generation of "wrong" answers
- Score tracking
- Results Summary with overview of quiz performance
- Reach Component Structure to present the quiz
- CSS Module styling

### Technologies used
- React
- Vite
- Javascript
- CSS Modules, with help from clsx for combining modules

### Intstallation Instructions
Clone the repository, install the relevant dependencies with ```npm install```, run locally and open the local server in browser

## Quiz System
The quiz is dynamically created from the dataset by the ```QuizBuilder``` class which
- Randomly selects an entry from the dataset, and depdnign on the question mode pulls the relevant information to form the "answer"
- Using that answer, and other information given, decoy answers are generated. But to be kind to users, there is no chance of "false friends", any possibility of duplicate answers or two answers "technically" being correct is removed. Each answer has one correct answer of the 4 on display
- Shuffles the answer order, so there's no chance of just clicking the first answer and guaranteeing a 10/10

The question data is stored in ```answers.json```

#### Notes
This was made to practice React application creation, component based structuring, dynamic rendering, and as a challenge to create a data-driven quiz generator. All Zelda related content does not belong to me, it belongs to Nintendo. The information that created this dataset was taken from ZeldaWiki.com, specifically [This Page](https://zeldawiki.wiki/wiki/Dungeon).

The font used for this project was taken from [Here](https://artsyomni.com/hyliaserif). It is not affiliated with Nintendo and is just a fan project. Even getting to download it felt like a Zelda puzzle! 


#### Further Improvements
To further improve, I have noticed some small chances of repeating the same question. Fixing this should be relatively easy, just adding in another datapoint to check when selecting an answer as the correct answer for that question

Additionally, as the project stands right now, it only relates to dungeons in the series. I had intended to include verious other "modes", but in order to keep the scope manageable to build up a working project, i opted to keep it to one category, but then realised this can still allow for some variance in the questions generated