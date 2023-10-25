package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

public class S4_14469 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[][] cowArr = new int[n][2];

        for(int i = 0; i < n; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            cowArr[i][0] = Integer.parseInt(st.nextToken());
            cowArr[i][1] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(cowArr, Comparator.comparingInt(o -> o[0]));


        int endTime = 0;
        for(int i = 0; i < n; i++){
            endTime = endTime < cowArr[i][0]
                    ? cowArr[i][0] + cowArr[i][1]
                    : endTime + cowArr[i][1];
        }
        System.out.println(endTime);
    }
}
