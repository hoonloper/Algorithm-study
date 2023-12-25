package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_1205 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] strs = br.readLine().split(" ");
        int N = Integer.parseInt(strs[0]);
        int score = Integer.parseInt(strs[1]);
        int P = Integer.parseInt(strs[2]);

        int[] ranking = new int[N];
        String[] nums = br.readLine().split(" ");
        for (int i = 0; i < N; i++) {
            ranking[i] = Integer.parseInt(nums[i]);
        }


        if(N == P && score <= ranking[ranking.length - 1]) {
            System.out.println(-1);
            return;
        }

        int rank = 1;
        for (int r : ranking) {
            if (score >= r) {
                break;
            }
            rank++;
        }
        System.out.println(rank);
    }
}
