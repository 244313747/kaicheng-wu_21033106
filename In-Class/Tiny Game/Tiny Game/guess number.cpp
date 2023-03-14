#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(0)); // seed random number generator
    int secretNumber = rand() % 100 + 1; // generate random number between 1 and 100

    int guess;
    int numGuesses = 0;

    cout << "Welcome to the Guess the Number game!\n\n";
    cout << "I'm thinking of a number between 1 and 100.\n";
    cout << "Try to guess it in as few attempts as possible!\n\n";

    do {
        cout << "Enter your guess (1-100): ";
        cin >> guess;

        numGuesses++;

        if (guess < secretNumber) {
            cout << "Too low!\n\n";
        }
        else if (guess > secretNumber) {
            cout << "Too high!\n\n";
        }
        else {
            cout << "\nCongratulations! You guessed it in " << numGuesses << " tries!\n";
        }
    } while (guess != secretNumber);

    return 0;
}
