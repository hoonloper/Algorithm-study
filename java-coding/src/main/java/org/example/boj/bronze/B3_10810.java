package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B3_10810 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] nm = br.readLine().split(" ");
        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);

        int[] i = new int[m];
        int[] j = new int[m];
        int[] k = new int[m];

        for(int z = 0; z < m; z++) {
            String[] ijk = br.readLine().split(" ");
            i[z] = Integer.parseInt(ijk[0]);
            j[z] = Integer.parseInt(ijk[1]);
            k[z] = Integer.parseInt(ijk[2]);
        }

        int[] ans = new int[n];

        for(int z = 0; z < m; z++) {
            for(int x = i[z] - 1; x <= j[z] - 1; x++) {
                ans[x] = k[z];
            }
        }

        StringBuilder answer = new StringBuilder();
        for(int z = 0; z < n; z++) {
            answer.append(ans[z]).append(" ");
        }
        System.out.println(answer);
    }
}
