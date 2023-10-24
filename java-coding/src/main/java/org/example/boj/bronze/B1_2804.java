package org.example.boj.bronze;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B1_2804 {
    public static void main(String[] args) throws Exception {
        StringTokenizer st = new StringTokenizer(new BufferedReader(new InputStreamReader(System.in)).readLine());
        String A = st.nextToken();
        String B = st.nextToken();

        int N = A.length();
        int M = B.length();

        int a, b=0;
        for(a=0;a<N;a++) {
            if((b = B.indexOf(A.charAt(a)))>=0) break;
        }

        StringBuilder sb = new StringBuilder();
        for(int i=0;i<M;i++) {
            if(i==b) {
                sb.append(A).append("\n");
                continue;
            }
            for(int j=0;j<N;j++) {
                if(j==a) sb.append(B.charAt(i));
                else sb.append(".");
            }
            sb.append("\n");
        }

        System.out.print(sb);
    }
}
