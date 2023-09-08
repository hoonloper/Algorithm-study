package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S3_9657 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int[] games = new int[1001];
        games[0] = 0;
        games[1] = 1;
        games[2] = 0;
        games[3] = 1;
        games[4] = 1;
        for(int i = 5; i < 1001; i++) {
            if(games[i - 1] + games[i - 3] + games[i - 4] < 3) {
                games[i] = 1;
            } else {
                games[i] = 0;
            }
        }

        System.out.println(games[n] == 1 ? "SK" : "CY");
    }
}
