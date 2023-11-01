package org.example.boj.gold;

import java.util.*;
import java.io.*;
public class G3_20057 {
    static int sum, N, toneX, toneY, dis;
    static int[][] board;
    static int[] dx = {0,1,0,-1};
    static int[] dy = {-1,0,1,0};
    static int[][] ratioX = {{0,-1,-1,-2,-1,1,1,2,1},
            {2,1,0,0,-1,1,0,0,-1},
            {0,1,1,2,1,-1,-1,-2,-1},
            {-2,-1,0,0,1,-1,0,0,1}};
    static int[][] ratioY = {{-2,-1,0,0,1,-1,0,0,1},
            {0,-1,-1,-2,-1,1,1,2,1},
            {2,1,0,0,-1,1,0,0,-1},
            {0,1,1,2,1,-1,-1,-2,-1}};
    static double[] ratioNum = {0.05,0.1,0.07,0.02,0.01,0.1,0.07,0.02,0.01};

    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        board= new int[N][N];
        toneX = N/2;
        toneY = N/2;

        for(int i=0; i<N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j=0; j<N; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int index =1;
        int tempIndex = 1;
        //토네이도 이동
        while (toneX != 0 || toneY != 0) {
            int d = dis % 4;
            toneX += dx[d];
            toneY += dy[d];
            tempIndex--;

            //알파값
            int alpa = board[toneX][toneY];
            int fix = board[toneX][toneY];

            //이동한 모래 초기화
            board[toneX][toneY] = 0;

            //흙 뿌리기
            for (int k = 0; k < 9; k++) {
                int x = toneX + ratioX[d][k];
                int y = toneY + ratioY[d][k];
                int num = (int) (fix * ratioNum[k]);

                if (x < 0 || x >= N || y < 0 || y >= N) {
                    sum += num;
                    alpa -= num;
                    continue;
                }

                board[x][y] += num;
                alpa -= num;
            }

            //알파 범위 검사
            if (toneX + dx[d] < 0 || toneX + dx[d] >= N || toneY + dy[d] < 0 || toneY + dy[d] >= N) sum += alpa;
            else board[toneX + dx[d]][toneY + dy[d]] += alpa;

            //방향전환
            if (tempIndex == 0) {
                dis++;
                if (dis % 4 == 2) index++;
                else if (dis % 4 == 0) index++;

                tempIndex = index;
            }
        }

        System.out.println(sum);
    }
}
