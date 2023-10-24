package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S5_10709 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] hw = br.readLine().split(" ");
        int h = Integer.parseInt(hw[0]);
        int w = Integer.parseInt(hw[1]);

        String[][] sky = new String[h][];

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < h; i++) {
            sky[i] = br.readLine().split("");

            int count = -1;
            for(int j = 0; j < w; j++) {
                if(sky[i][j].equals("c")) {
                    count = 0;
                    sb.append(count);
                } else if(count > -1) {
                    sb.append(++count);
                } else {
                    sb.append(count);
                }
                sb.append(" ");
            }
            sb.append("\n");
        }
        System.out.println(sb.toString());
    }
}
