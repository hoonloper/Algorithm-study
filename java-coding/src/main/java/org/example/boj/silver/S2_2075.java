package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class S2_2075 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        Queue<Long> queue = new PriorityQueue<>();
        for(int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j = 0; j < n; j++) {
                queue.add(Long.valueOf(st.nextToken()));
            }
        }

        int k = n * n;
        while (k > n) {
            queue.poll(); // 가장 큰 값 제거
            k--;
        }

        System.out.println(queue.peek());
    }
}
