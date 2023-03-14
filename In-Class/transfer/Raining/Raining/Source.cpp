#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <chrono>
#include <thread>

using namespace std;

int main() {
    const int SCREEN_WIDTH = 120;
    const int SCREEN_HEIGHT = 50;
    vector<int> drops(SCREEN_WIDTH, 0);
    srand(time(NULL));

    while (true) {
        // Generate a new drop
        int x = rand() % SCREEN_WIDTH;
        drops[x] = 1;

        // Render drops
        for (int i = 0; i < SCREEN_WIDTH; i++) {
            if (drops[i] == 1) {
                cout << "|";
            }
            else {
                cout << " ";
            }
        }
        cout << endl;


        // Update drops and sleep
        for (int i = 0; i < SCREEN_WIDTH; i++) {
            if (drops[i] == 1) {
                drops[i] = 0;
                if (i < SCREEN_WIDTH - 1) {
                    drops[i + 1] = 1;
                }
            }
        }
        this_thread::sleep_for(chrono::milliseconds(30));
    }

    return 0;
}
