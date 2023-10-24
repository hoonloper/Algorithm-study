package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class S2_5212 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int r = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        String[][] board = new String[r][c];

        int[] dx = new int[]{ 1, 0, -1, 0};
        int[] dy = new int[]{ 0, 1, 0, -1};

        for(int i = 0; i < r; i++) {
            board[i] = br.readLine().split("");
        }

        List<int[]> xy = new ArrayList<>();

        for(int i = 0; i < r; i++) {
            for(int j = 0; j < c; j++) {
                if(board[i][j].equals(".")) {
                    continue;
                }

                int count = 0;
                for(int z = 0; z < 4; z++) {
                    int x = i + dx[z];
                    int y = j + dy[z];
                    if(x >= r || x < 0 || y >= c || y < 0 || board[x][y].equals(".")) {
                        count++;
                    }
                }
                if(count >= 3) {
                    xy.add(new int[]{i, j});
                }
            }
        }
        for(int[] arr : xy) {
            board[arr[0]][arr[1]] = ".";
        }

        int minR = Integer.MAX_VALUE;
        int minC = Integer.MAX_VALUE;
        int maxR = 0;
        int maxC = 0;
        for(int i = 0; i < r; i++) {
            for(int j = 0; j < c; j++) {
                if(board[i][j].equals("X")) {
                    minR = Math.min(minR, i);
                    minC = Math.min(minC, j);
                    maxR = Math.max(maxR, i);
                    maxC = Math.max(maxC, j);
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for(int i = minR; i <= maxR; i++) {
            for(int j = minC; j <= maxC; j++) {
                sb.append(board[i][j]);
            }
            sb.append("\n");
        }
        System.out.println(sb.toString());
    }
}
