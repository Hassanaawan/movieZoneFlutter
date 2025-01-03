# Movie Zone Application

The **Movie Zone Application** is a sleek, user-friendly mobile app built with Flutter, designed to provide users with an immersive movie and TV show experience. The app allows users to browse through movies, get detailed information, save their favorite films, and more. It uses the TMDb API for dynamic content fetching and Firebase for user authentication and management.

## Features

- **Movie Discovery**
  - Browse and search through a vast library of movies and TV shows.
  - Categorized filters such as Popular, Top-Rated, and Upcoming.

- **Detailed Information**
  - View comprehensive movie and TV show details: synopsis, cast, release date, runtime, ratings, and trailers.

- **Personalized Recommendations**
  - Receive tailored suggestions based on user preferences and browsing history.

- **User Authentication**
  - Secure login and signup via email, Google, or other third-party services.
  - Store user profiles and preferences.

- **Favorites and Watchlist**
  - Add movies and shows to a watchlist or mark favorites for easy access.

- **Dynamic Search**
  - Search for movies or TV shows using keywords or genres, with real-time filtering.

- **Responsive Design**
  - Optimized for Android and iOS devices with an intuitive, visually appealing UI.

- **Secure Backend Integration**
  - Built-in authentication with **JWT** for secure data access.
  - Firebase or MongoDB for user data management.

- **Offline Support**
  - Save data locally for a smoother experience, even without an active internet connection.

- **Theming Options**
  - Light and dark themes to suit user preferences.

## Technical Stack

- **Flutter & Dart**: Cross-platform framework for building native applications.
- **BLoC Architecture**: Efficient state management for scalable and maintainable code.
- **TMDb API Integration**: Fetch movie and TV show data dynamically.
- **Firebase**: Handles authentication and real-time data updates.
- **MongoDB (optional)**: Database integration for storing user profiles.
- **JWT**: JSON Web Tokens for secure user authentication.

## Installation

To run the Movie Zone app locally, follow the steps below:
 ####  Frontend
  flutter clean
  flutter pub get
  flutter run 
  for using this use the latest version of flutter 
  ####  Backend
   first of all replace TMDB key with your one and change it according to your local ip
   npm install
   npm run dev 

### 1. Clone the repository

```bash
git clone [https://github.com/yourusername/movie-zone-app.git](https://github.com/Hassanaawan/movieZoneFlutter.git)
