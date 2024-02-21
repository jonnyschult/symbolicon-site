# README

> A monorepo managed through [lerna](https://github.com/lerna/lerna) that houses packages related to the README project.

## Getting Started

### Install node

```bash
nvm install 18.18.2
```

The `.nvmrc` file in the root of this project should default to node 18.12 if you run `nvm use`.
Confirm that this is the case by running `node ########version` on the command line.

### Install pnpm

Follow the [pnpm installation instructions](https://pnpm.io/installation).

### Install dependencies

We use [pnpm workspaces](https://pnpm.io/workspaces), which allows for dependency sharing between packages. This allows us to just do a single install at the root folder.

```bash
pnpm install
```

## Deployments

We use Render to handle deployments.

### Staging Deploy

Staging deploys are started automatically when a commit is merged into the `develop` branch.

### Production Deploy

Production deploys are started automatically when a commit is merged into the `main` branch. Merge with caution!

## Ergonomics

#### Single Keys

1. 001000 (LIF)
2. 000100 (RIF)
3. 010000 (LMF)
4. 000010 (RMF)
5. 100000 (LRF)
6. 000001 (RRF)

#### Two Key Adjacent Fingers (1/2)

7. 000110 (RIF + RMF)
8. 011000 (LIF + LMF)

#### Two Key Mirroring Fingers (1/2)

9. 001100 (Both Index)
10. 010010 (Both Middles)

#### Two Key Adjacent Fingers (2/2)

11. 000011 (RMF + RRF)
12. 110000 (LMF + LRF)

#### Two Key Mirroring Fingers (2/2)

13. 100001 (Both Ring)

#### Three Key Adjacent Fingers

14. 000111 (RIF + RMF + RRF)
15. 111000 (LRF + LMF + LIF)

#### Four Key Adjacent Fingers

16. 011110 (LIF + LMF + RIF + RMF)
17. 110011 (LMF + LRF + RMF + RRF)

#### Six Key

18. 111111 (All Fingers)

#### Two Key Asymmetric Fingers

19. 001010 (LIF + RMF)
20. 010100 (LMF + RIF)
21. 001001 (LIF + RRF)
22. 100100 (LRF + RIF)
23. 010001 (LMF + RRF)
24. 100010 (LRF + RMF)

#### Two Key Split Fingers

25. 101000 (LRF + LIF)
26. 000101 (RIF + RRF)

#### Three Key Asymmetric Fingers (1/2)

27. 001110 (LIF + RIF + RMF)
28. 010110 (LMF + RIF + RMF)
29. 011100 (LIF + LmF + RiF)
30. 011010 (LMF + RIF + RMF)
31. 100110 (LRF + RIF + RMF)
32. 011001 (LMF + LIF + RRF)

#### Four Key Asymmetric Fingers (1/2)

33. 001111 (LIF + RIF + RMF + RRF)
34. 010111 (LMF + RIF + RMF + RRF)
35. 100111 (LRF + RIF + RMF + RRF)
36. 111100 (LRF + LMF + LIF + RIF)
37. 111010 (LRF + LMF + LIF + RMF)
38. 111001 (LRF + LMF + LIF + RRF)

#### Three Key Asymmetric Fingers (2/2)

39. 110100 (LRF + LMF + RIF)
40. 110010 (LRF + LMF + RMF)
41. 110001 (LRF + LMF + RRF)
42. 001011 (LIF + RMF + RRF)
43. 010011 (LMF + RMF + RRF)
44. 100011 (LRF + RMF + RRF)

#### Four Key Mirror Fingers

45. 101101 (LRF + LIF + RIF + RRF)

#### Three Key Split Fingers

46. 101100 (LRF + LIF + RIF)
47. 101001 (LRF + LIF + RRF)
48. 101010 (LRF + LIF + RMF)
49. 001101 (LIF + RIF + RRF)
50. 010101 (LMF + RIF + RRF)
51. 100101 (LRF + RIF + RRF)

#### Five Key (1/2)

52. 111110 (All but RRF)
53. 111011 (All but RIF)
54. 011111 (All but LRF)
55. 110111 (All but LIF)

#### Four Key Asymmetric Fingers (2/3)

56. 110110 (LRF + LMF + RIF + RMF)
57. 011011 (LMF + LIF + RMF + RRF)

#### Five Key Split Finger

58. 111101 (All but RMF)
59. 101111 (All but LMF)

#### Four Key Split Finger

60. 101110 (LRF + LIF + RIF + RMF)
61. 101011 (LRF + LIF + RMF + RRF)
62. 011101 (LMF + LIF + RIF + RRF)
63. 110101 (LRF + LMF + RIF + RRF)
