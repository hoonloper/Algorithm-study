package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class S2_2630 {
    static int w = 0;
    static int b = 0;
    static int[][] board;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        board = new int[n][n];
        for(int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j = 0; j < n; j++) {
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        partition(0, 0, n);

        System.out.println(w);
        System.out.println(b);
    }

    private static void partition(int r, int c, int s) {
        if(checkColor(r, c, s)) {
            if(board[r][c] == 0) {
                w++;
            } else {
                b++;
            }
            return;
        }

        int ns = s / 2;
        partition(r, c, ns);
        partition(r, c + ns, ns);
        partition(r + ns, c, ns);
        partition(r + ns, c + ns, ns);
    }

    private static boolean checkColor(int r, int c, int s) {
        int color = board[r][c];

        for(int i = r; i < r + s; i++) {
            for(int j = c; j < c + s; j++) {
                if(board[i][j] != color) {
                    return false;
                }
            }
        }
        return true;
    }
}
