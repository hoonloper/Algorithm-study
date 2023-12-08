package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B2_25501 {
    static int count = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < T; i++) {
            String S = br.readLine();
            count = 0;
            sb.append(isPalindrome(S)).append(" ").append(count).append("\n");
        }
        br.close();
        System.out.print(sb);
    }

    static int isPalindrome(String s) {
        return recursion(s, 0, (s.length() - 1));
    }

    static int recursion(String s, int start, int end) {
        count++;

        return start >= end
            ? 1
            : s.charAt(start) !=  s.charAt(end)
            ? 0
            : recursion(s, (start + 1), (end - 1));
    }
}
