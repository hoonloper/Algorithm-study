package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.StringTokenizer;

public class S3_14235 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        Queue<Integer> queue = new PriorityQueue<>((o1, o2)-> o2 - o1);

        StringBuilder answer = new StringBuilder();

        for (int i = 0; i < n; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int value = Integer.parseInt(st.nextToken());

            if(value == 0){
                answer.append(queue.isEmpty() ? -1 : queue.poll()).append("\n");
                continue;
            }

            for (int j = 0; j < value; j++) {
                queue.offer(Integer.parseInt(st.nextToken()));
            }
        }

        System.out.print(answer);
    }
}
