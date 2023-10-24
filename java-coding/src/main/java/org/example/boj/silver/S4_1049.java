package org.example.boj.silver;


import java.io.*;
import java.util.*;
public class S4_1049 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] mn = br.readLine().split(" ");
        int n = Integer.parseInt(mn[0]);
        int m = Integer.parseInt(mn[1]);

        int[] packages = new int[m];
        int[] units = new int[m];
        for(int i = 0; i < m; i++) {
            String[] str = br.readLine().split(" ");
            packages[i] = Integer.parseInt(str[0]);
            units[i] = Integer.parseInt(str[1]);
        }

        Arrays.sort(packages);
        Arrays.sort(units);

        int min;
        //가장 싼 6개짜리 팩 구매 vs 가장 싼 낱개 구매 vs (가장싼 6개짜리 팩 + 낱개)
        min = Math.min(((n/6)+1)*packages[0], n*units[0]);
        min = Math.min(min, ((n/6))*packages[0] + (n%6)*units[0]);

        System.out.println(min);
    }
}
