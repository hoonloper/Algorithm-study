package org.example.topcoder.bruteforce;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Vector;

public class Three_InterestingDigits {
    public static void main(String[] args) {
        int base = 9;

        int[] answer = digit(base);

        System.out.println(Arrays.toString(answer));
    }

    public static int[] digit(int base) {
        // 수학 공식 이용
        Vector<Integer> v = new Vector<>();

        for(int i = 2; i < base; i++) {
            if((base - 1) % i == 0) v.add(i);
        }

        int[] ans = new int[v.size()];
        for(int i = 0; i < v.size(); i++) {
            ans[i] = v.get(i);
        }

        return ans;

        // 전체 탐색
//        List<Integer> values = new ArrayList<>();
//
//        for(int n = 2; n < base; n++) {
//            boolean ok = true;
//            for(int k1 = 0; k1 < base; k1++) {
//                for(int k2 = 0; k2 < base; k2++) {
//                    for(int k3 = 0; k3 < base; k3++) {
//                        if((k1 + k2 * base + k3 * base * base) % n == 0 && (k1 + k2 + k3) % n != 0) {
//                            // n의 배수 숫자로 각 숫자의 합이 n의 배수가 아니면 n을 제외
//                            ok = false;
//                            break;
//                        }
//                    }
//                    if(!ok) break;
//                }
//                if(!ok) break;
//            }
//            if(ok) {
//                values.add(n);
//            }
//        }
//        int[] ans = new int[values.size()];
//        for(int i = 0; i < values.size(); i++) {
//            ans[i] = values.get(i);
//        }
//
//        return ans;
    }
}
