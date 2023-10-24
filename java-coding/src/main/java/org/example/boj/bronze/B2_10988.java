package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class B2_10988 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String input = br.readLine();
        int ans = 1;
        for (int i = input.length() - 1; i >= 0; i--) {
            char c = input.charAt(i);

            if (c != input.charAt(input.length() - i - 1)) {
                ans = 0;
                break;
            }
        }

        bw.write(ans + "\n");
        bw.flush();
        bw.close();
        br.close();
    }
}
