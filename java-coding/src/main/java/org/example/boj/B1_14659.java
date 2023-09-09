package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B1_14659 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());


        int max = 0;
        int count = 0;
        int maxCount = 0;
        while(st.hasMoreTokens()) {
            int h = Integer.parseInt(st.nextToken());
            if(max > h) {
                count++;
            } else {
                max = h;
                maxCount = Math.max(maxCount, count);
                count = 0;
            }
        }
        System.out.println(Math.max(maxCount, count));
    }
}
