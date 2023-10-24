package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S4_2567 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[][] map = new int[101][101];

        for(int t=0;t<N;t++) {
            String[] xy = br.readLine().split(" ");
            int x = Integer.parseInt(xy[0]);
            int y = Integer.parseInt(xy[1]);

            for(int i=0;i<10;i++) {
                for(int j=0;j<10;j++){
                    map[x+i][y+j] = 1;
                }
            }
        }

        int sum = 0;
        for(int i=0;i<101;i++) {
            for(int j=0;j<101;j++) {
                if(i-1>=0 && map[i][j] == 1 && map[i-1][j] == 0) sum++;
                if(i+1<101 && map[i][j] == 1 && map[i+1][j] == 0) sum++;
                if(j-1>=0 && map[i][j] == 1 && map[i][j-1] == 0) sum++;
                if(j+1<101 && map[i][j] == 1 && map[i][j+1] == 0) sum++;
            }
        }
        System.out.println(sum);
    }
}
