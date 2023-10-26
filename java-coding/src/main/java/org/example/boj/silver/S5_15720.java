package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Stream;

public class S5_15720 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inputs = br.readLine().split(" ");
        int[] bs =  Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();;
        int[] sss =  Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();;
        int[] ds =  Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();;
        Integer[] b = Arrays.stream(bs).boxed().toArray(Integer[]::new);
        Integer[] s = Arrays.stream(sss).boxed().toArray(Integer[]::new);
        Integer[] d = Arrays.stream(ds).boxed().toArray(Integer[]::new);
        Arrays.sort(b, Collections.reverseOrder());
        Arrays.sort(s, Collections.reverseOrder());
        Arrays.sort(d, Collections.reverseOrder());

        int origin = 0;
        int dis = 0;
        for(int i = 0; i < 1000; i++) {
            boolean isB = i >= Integer.parseInt(inputs[0]);
            boolean isS = i >= Integer.parseInt(inputs[1]);
            boolean isD = i >= Integer.parseInt(inputs[2]);

            if(isB && isS && isD) {
                break;
            }
            int bb = isB ? 0 : b[i];
            int ss = isS ? 0 : s[i];
            int dd = isD ? 0 : d[i];
            origin += bb + ss + dd;
            if(!isB && !isS && !isD) {
                dis += (int) ((bb + ss + dd) * 0.9);
            } else {
                dis += bb + ss + dd;
            }
        }
        System.out.println(origin);
        System.out.println(dis);
    }
}
