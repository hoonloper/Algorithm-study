package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class B3_11721 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int NUM = 10;
        String str = br.readLine();
        int strLen = str.length();
        int len = (int) Math.ceil((double) strLen / NUM);

        String answer = "";
        for(int i = 0; i < len; i++) {
            int start = i * NUM;
            int _end = (i + 1) * NUM;
            int end = Math.min(strLen, _end);
            answer += str.substring(start, end) + "\n";
        }
        System.out.println(answer);
    }
}
