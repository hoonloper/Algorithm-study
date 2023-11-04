package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class S1_1074 {
    static int N, R, C, ans = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        solution(0, 0, (int)Math.pow(2, N));
    }
    private static void solution(int r, int c, int size) {
        if(size == 1) {
            System.out.println(ans);
            return;
        }
        int newSize = size / 2;
        if(R < r + newSize && C < c + newSize ) {
            solution(r, c, newSize);
        }
        if(R < r + newSize && c + newSize <= C) {
            ans += (size*size) / 4;
            solution(r, c+newSize, newSize);
        }
        if(r + newSize <= R && C < c + newSize ) {
            ans += ((size*size) / 4) * 2;
            solution(r+newSize, c, newSize);
        }
        if(r + newSize <= R && c + newSize <= C ) {
            ans += ((size*size) / 4) * 3;
            solution(r+newSize, c+newSize, newSize);
        }
    }
}
